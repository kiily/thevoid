import type { APIContext } from 'astro';
import { DataService } from '../../lib/data-service';
import sharp from 'sharp';

export const prerender = true;

export async function getStaticPaths() {
	const posts = await DataService.getGardenPosts();
	return posts.map((post) => ({
		params: { slug: post.id },
		props: {
			title: post.data.title,
			category: post.data.category,
			publishDate: post.data.publishDate,
		},
	}));
}

function escapeXml(text: string): string {
	return text
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&apos;');
}

function wrapText(text: string, maxChars: number): string[] {
	const words = text.split(' ');
	const lines: string[] = [];
	let currentLine = '';
	for (const word of words) {
		const testLine = currentLine ? `${currentLine} ${word}` : word;
		if (testLine.length <= maxChars) {
			currentLine = testLine;
		} else {
			if (currentLine) lines.push(currentLine);
			currentLine = word;
		}
	}
	if (currentLine) lines.push(currentLine);
	return lines;
}

function getTextLayout(title: string): {
	lines: string[];
	fontSize: number;
	lineHeight: number;
	startY: number;
} {
	const lines72 = wrapText(title, 22);
	if (lines72.length <= 1)
		return { lines: lines72, fontSize: 72, lineHeight: 90, startY: 240 };

	const lines60 = wrapText(title, 28);
	if (lines60.length <= 2)
		return { lines: lines60, fontSize: 60, lineHeight: 78, startY: 230 };

	const lines48 = wrapText(title, 36);
	return { lines: lines48.slice(0, 3), fontSize: 48, lineHeight: 64, startY: 220 };
}

function generateSvg(
	title: string,
	category: string,
	publishDate: Date,
): string {
	const { lines, fontSize, lineHeight, startY } = getTextLayout(title);
	const year = publishDate.getFullYear();

	const titleSvg = lines
		.map(
			(line, i) =>
				`<text x="72" y="${startY + i * lineHeight}" font-family="Arial, Helvetica, sans-serif" font-size="${fontSize}" font-weight="700" fill="#e1e1e1">${escapeXml(line)}</text>`,
		)
		.join('\n    ');

	return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <!-- Background -->
  <rect width="1200" height="630" fill="#1a1a1a"/>

  <!-- Left accent bar -->
  <rect x="0" y="0" width="8" height="630" fill="#90EE90"/>

  <!-- Decorative enso (simplified, no filter for clean rendering) -->
  <g transform="translate(960, -60) scale(1.35)" opacity="0.12">
    <path d="M 62 22 C 38 38, 16 51, 15 97 C 14 145, 49 183, 97 184 C 145 185, 182 149, 184 102 C 186 55, 162 38, 138 22"
      fill="none" stroke="#90EE90" stroke-width="40" stroke-linecap="round"/>
  </g>

  <!-- Category -->
  <text x="72" y="150" font-family="Arial, Helvetica, sans-serif" font-size="22" font-weight="400" fill="#90EE90" letter-spacing="4">${escapeXml(category.toUpperCase())} · ${year}</text>

  <!-- Title -->
  ${titleSvg}

  <!-- Divider -->
  <line x1="72" y1="560" x2="1128" y2="560" stroke="#2d2d2d" stroke-width="1"/>

  <!-- Author -->
  <text x="72" y="598" font-family="Arial, Helvetica, sans-serif" font-size="22" fill="#555555">Miguel Marin Vermelho</text>

  <!-- Site URL -->
  <text x="1128" y="598" font-family="Arial, Helvetica, sans-serif" font-size="22" fill="#555555" text-anchor="end">thevoid.garden</text>
</svg>`;
}

export async function GET({ props }: APIContext) {
	const { title, category, publishDate } = props as {
		title: string;
		category: string;
		publishDate: Date;
	};

	const svg = generateSvg(title, category, publishDate);
	const png = await sharp(Buffer.from(svg)).png().toBuffer();

	return new Response(png, {
		headers: {
			'Content-Type': 'image/png',
			'Cache-Control': 'public, max-age=31536000, immutable',
		},
	});
}

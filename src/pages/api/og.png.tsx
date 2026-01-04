/* eslint-disable react/no-unknown-property, @typescript-eslint/ban-ts-comment */
// @ts-nocheck
/**
 * OG Image Generation API
 * Inline styles are required by @vercel/og and cannot be moved to external CSS
 */
import type { APIRoute } from 'astro';
import { ImageResponse } from '@vercel/og';
import fs from 'fs/promises';
import path from 'path';
import React from 'react';

export const GET: APIRoute = async ({ url }) => {
	try {
		// Get URL parameters
		const searchParams = new URL(url).searchParams;
		const title = searchParams.get('title') || 'The Void';
		const description =
			searchParams.get('description') ||
			'A digital garden of thoughts and ideas';
		const category = searchParams.get('category') || '';
		const type = searchParams.get('type') || 'garden';

		// Read the void.svg file
		const svgPath = path.join(process.cwd(), 'public', 'void.svg');
		let svgContent: string;

		try {
			svgContent = await fs.readFile(svgPath, 'utf8');
		} catch (error) {
			console.warn('Could not read void.svg, using fallback', error);
			svgContent =
				'<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="40" fill="#333"/></svg>';
		}

		// Define color schemes
		const colorSchemes = {
			garden: {
				background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
				accent: '#a855f7',
				text: '#ffffff',
				overlay: 'rgba(147, 51, 234, 0.1)',
			},
			project: {
				background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
				accent: '#ec4899',
				text: '#ffffff',
				overlay: 'rgba(236, 72, 153, 0.1)',
			},
			philosophy: {
				background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
				accent: '#06b6d4',
				text: '#ffffff',
				overlay: 'rgba(6, 182, 212, 0.1)',
			},
			meditation: {
				background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
				accent: '#10b981',
				text: '#1f2937',
				overlay: 'rgba(16, 185, 129, 0.1)',
			},
			default: {
				background: 'linear-gradient(135deg, #1e1e1e 0%, #3a3a3a 100%)',
				accent: '#ffffff',
				text: '#ffffff',
				overlay: 'rgba(255, 255, 255, 0.05)',
			},
		};

		// Select color scheme
		const scheme =
			colorSchemes[category.toLowerCase() as keyof typeof colorSchemes] ||
			colorSchemes[type as keyof typeof colorSchemes] ||
			colorSchemes.default;

		// Process SVG for embedding
		const processedSvg = svgContent
			.replace(/width="[^"]*"/, 'width="120"')
			.replace(/height="[^"]*"/, 'height="120"');

		return new ImageResponse(
			(
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						width: '100%',
						height: '100%',
						background: scheme.background,
						position: 'relative',
						fontFamily: 'Inter, system-ui, sans-serif',
					}}
				>
					{/* Background Pattern */}
					<div
						style={{
							position: 'absolute',
							width: '100%',
							height: '100%',
							background: scheme.overlay,
							backgroundImage: `
								radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 50%),
								radial-gradient(circle at 75% 75%, rgba(255,255,255,0.05) 0%, transparent 50%)
							`,
						}}
					/>

					{/* SVG Logo - positioned in top right */}
					<div
						style={{
							position: 'absolute',
							top: '40px',
							right: '40px',
							width: '120px',
							height: '120px',
							opacity: 0.7,
							filter: 'brightness(0) invert(1)',
						}}
						dangerouslySetInnerHTML={{
							__html: processedSvg,
						}}
					/>

					{/* Main Content */}
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'flex-start',
							width: '100%',
							height: '100%',
							padding: '80px',
							paddingRight: '200px',
						}}
					>
						{/* Category Badge */}
						{category && (
							<div
								style={{
									background: scheme.accent,
									color:
										category.toLowerCase() === 'meditation'
											? '#ffffff'
											: scheme.text,
									padding: '12px 24px',
									borderRadius: '9999px',
									fontSize: '18px',
									fontWeight: '600',
									marginBottom: '24px',
									textTransform: 'uppercase',
									letterSpacing: '0.05em',
								}}
							>
								{category}
							</div>
						)}

						{/* Title */}
						<h1
							style={{
								fontSize: title.length > 50 ? '48px' : '64px',
								fontWeight: '800',
								color: scheme.text,
								lineHeight: '1.1',
								marginBottom: '24px',
								maxWidth: '900px',
								textShadow: '0 4px 8px rgba(0,0,0,0.3)',
							}}
						>
							{title}
						</h1>

						{/* Description */}
						{description && (
							<p
								style={{
									fontSize: '24px',
									color: scheme.text,
									opacity: 0.9,
									lineHeight: '1.4',
									maxWidth: '800px',
									fontWeight: '400',
								}}
							>
								{description.length > 120
									? description.substring(0, 120) + '...'
									: description}
							</p>
						)}

						{/* Decorative Elements */}
						<div
							style={{
								position: 'absolute',
								bottom: '40px',
								left: '80px',
								width: '60px',
								height: '4px',
								background: scheme.accent,
								borderRadius: '2px',
							}}
						/>
					</div>

					{/* Bottom Branding */}
					<div
						style={{
							position: 'absolute',
							bottom: '40px',
							right: '80px',
							fontSize: '16px',
							color: scheme.text,
							opacity: 0.7,
							fontWeight: '500',
						}}
					>
						thevoid.vercel.app
					</div>
				</div>
			),
			{
				width: 1200,
				height: 630,
			}
		);
	} catch (error) {
		console.error('Error generating OG image:', error);

		// Fallback simple image
		return new ImageResponse(
			(
				<div
					style={{
						display: 'flex',
						width: '100%',
						height: '100%',
						background: 'linear-gradient(135deg, #1e1e1e 0%, #3a3a3a 100%)',
						justifyContent: 'center',
						alignItems: 'center',
						color: 'white',
						fontSize: '48px',
						fontWeight: 'bold',
					}}
				>
					The Void
				</div>
			),
			{
				width: 1200,
				height: 630,
			}
		);
	}
};

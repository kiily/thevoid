export interface Technology {
	name: string;
	website: string;
	docs: string;
	logo: string;
	categories: string[];
	level: number; // 1-5, where 5 is most proficient
}

export const technologies: Technology[] = [
	// Languages & Core Web
	{
		name: 'TypeScript',
		website: 'https://www.typescriptlang.org/',
		docs: 'https://www.typescriptlang.org/docs/',
		logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
		categories: ['language', 'frontend', 'backend'],
		level: 5,
	},
	{
		name: 'JavaScript',
		website: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
		docs: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide',
		logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
		categories: ['language', 'frontend', 'backend'],
		level: 5,
	},
	{
		name: 'HTML',
		website: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
		docs: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
		logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
		categories: ['language', 'frontend'],
		level: 5,
	},
	{
		name: 'CSS',
		website: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
		docs: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
		logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
		categories: ['language', 'frontend'],
		level: 5,
	},
	{
		name: 'Python',
		website: 'https://www.python.org/',
		docs: 'https://docs.python.org/3/',
		logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
		categories: ['language', 'backend', 'data'],
		level: 4,
	},
	{
		name: 'Bash',
		website: 'https://www.gnu.org/software/bash/',
		docs: 'https://www.gnu.org/software/bash/manual/',
		logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg',
		categories: ['language', 'devops'],
		level: 4,
	},

	// Frameworks & Libraries
	{
		name: 'React',
		website: 'https://react.dev/',
		docs: 'https://react.dev/learn',
		logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
		categories: ['framework', 'frontend'],
		level: 5,
	},
	{
		name: 'Next.js',
		website: 'https://nextjs.org/',
		docs: 'https://nextjs.org/docs',
		logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
		categories: ['framework', 'frontend', 'backend'],
		level: 5,
	},
	{
		name: 'Astro',
		website: 'https://astro.build/',
		docs: 'https://docs.astro.build/',
		logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/astro/astro-original.svg',
		categories: ['framework', 'frontend'],
		level: 4,
	},
	{
		name: 'Angular',
		website: 'https://angular.io/',
		docs: 'https://angular.io/docs',
		logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg',
		categories: ['framework', 'frontend'],
		level: 3,
	},
	{
		name: 'Flutter',
		website: 'https://flutter.dev/',
		docs: 'https://docs.flutter.dev/',
		logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
		categories: ['framework', 'mobile'],
		level: 3,
	},

	// Runtime & Build Tools
	{
		name: 'Node.js',
		website: 'https://nodejs.org/',
		docs: 'https://nodejs.org/docs/',
		logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
		categories: ['runtime', 'backend'],
		level: 5,
	},
	{
		name: 'Bun',
		website: 'https://bun.sh/',
		docs: 'https://bun.sh/docs',
		logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bun/bun-original.svg',
		categories: ['runtime', 'backend'],
		level: 3,
	},
	{
		name: 'Vite',
		website: 'https://vitejs.dev/',
		docs: 'https://vitejs.dev/guide/',
		logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg',
		categories: ['build', 'frontend'],
		level: 4,
	},
	{
		name: 'Webpack',
		website: 'https://webpack.js.org/',
		docs: 'https://webpack.js.org/concepts/',
		logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg',
		categories: ['build', 'frontend'],
		level: 3,
	},

	// Databases
	{
		name: 'MongoDB',
		website: 'https://www.mongodb.com/',
		docs: 'https://www.mongodb.com/docs/',
		logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
		categories: ['database', 'backend'],
		level: 4,
	},
	{
		name: 'PostgreSQL',
		website: 'https://www.postgresql.org/',
		docs: 'https://www.postgresql.org/docs/',
		logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
		categories: ['database', 'backend'],
		level: 4,
	},
	{
		name: 'MySQL',
		website: 'https://www.mysql.com/',
		docs: 'https://dev.mysql.com/doc/',
		logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
		categories: ['database', 'backend'],
		level: 3,
	},

	// DevOps & Infrastructure
	{
		name: 'Docker',
		website: 'https://www.docker.com/',
		docs: 'https://docs.docker.com/',
		logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
		categories: ['devops', 'infrastructure'],
		level: 4,
	},
	{
		name: 'Kubernetes',
		website: 'https://kubernetes.io/',
		docs: 'https://kubernetes.io/docs/',
		logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
		categories: ['devops', 'infrastructure'],
		level: 3,
	},

	// Cloud & Hosting
	{
		name: 'Vercel',
		website: 'https://vercel.com/',
		docs: 'https://vercel.com/docs',
		logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg',
		categories: ['cloud', 'hosting'],
		level: 5,
	},
	{
		name: 'AWS',
		website: 'https://aws.amazon.com/',
		docs: 'https://docs.aws.amazon.com/',
		logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
		categories: ['cloud', 'infrastructure'],
		level: 3,
	},
	{
		name: 'Digital Ocean',
		website: 'https://www.digitalocean.com/',
		docs: 'https://docs.digitalocean.com/',
		logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg',
		categories: ['cloud', 'hosting'],
		level: 3,
	},
	{
		name: 'Cloudflare',
		website: 'https://www.cloudflare.com/',
		docs: 'https://developers.cloudflare.com/',
		logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cloudflare/cloudflare-original.svg',
		categories: ['cloud', 'infrastructure'],
		level: 4,
	},
	{
		name: 'Bitrise',
		website: 'https://bitrise.io/',
		docs: 'https://devcenter.bitrise.io/',
		logo: 'https://www.bitrise.io/favicon.ico',
		categories: ['devops', 'mobile'],
		level: 3,
	},

	// Observability & Analytics
	{
		name: 'Datadog',
		website: 'https://www.datadoghq.com/',
		docs: 'https://docs.datadoghq.com/',
		logo: 'https://imgix.datadoghq.com/img/dd_logo_n_70x75.png',
		categories: ['observability', 'devops'],
		level: 4,
	},
	{
		name: 'Segment',
		website: 'https://segment.com/',
		docs: 'https://segment.com/docs/',
		logo: 'https://segment.com/favicon.ico',
		categories: ['analytics', 'data'],
		level: 4,
	},
	{
		name: 'Statsig',
		website: 'https://statsig.com/',
		docs: 'https://docs.statsig.com/',
		logo: 'https://statsig.com/favicon.ico',
		categories: ['analytics', 'experimentation'],
		level: 4,
	},

	// Business Tools
	{
		name: 'Stripe',
		website: 'https://stripe.com/',
		docs: 'https://stripe.com/docs',
		logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/stripe/stripe-original.svg',
		categories: ['payments', 'backend'],
		level: 4,
	},
	{
		name: 'Customer.io',
		website: 'https://customer.io/',
		docs: 'https://customer.io/docs/',
		logo: 'https://customer.io/favicon.ico',
		categories: ['marketing', 'automation'],
		level: 4,
	},

	// AI & Dev Tools
	{
		name: 'Claude Code',
		website: 'https://claude.ai/',
		docs: 'https://docs.anthropic.com/',
		logo: 'https://claude.ai/favicon.ico',
		categories: ['ai', 'devtools'],
		level: 5,
	},
	{
		name: 'Cursor',
		website: 'https://cursor.sh/',
		docs: 'https://docs.cursor.com/',
		logo: 'https://cursor.sh/favicon.ico',
		categories: ['ai', 'devtools'],
		level: 4,
	},
];

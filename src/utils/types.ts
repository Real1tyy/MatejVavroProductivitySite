export interface Tool {
	name: string;
	description: string;
	githubUrl: string;
	docsUrl?: string;
	youtubeUrl?: string;
}

export interface SupportOption {
	name: string;
	description: string;
	url: string;
	color: string;
	hoverColor: string;
}

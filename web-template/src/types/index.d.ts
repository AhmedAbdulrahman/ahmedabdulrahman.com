import * as React from 'react'

export interface IPaginator {
	pageCount: number
	index: number
	pathPrefix: string
}

interface IGatsbyImage {
	src: string
	base64?: string
	srcWebp?: string
	srcSet?: string
	srcSetWebp?: string
	tracedSVG?: string
	alt?: string
}

interface IGatsbyImageFluid extends IGatsbyImage {
	maxHeight: number
	maxWidth: number
	aspectRatio?: number
	sizes?: string
	media?: string
	height: number
	width: number
}

interface IGatsbyImageFixed extends IGatsbyImage {
	height: number
	width: number
	media?: string
}

export interface IAuthor {
	authorsPage?: boolean
	featured?: boolean
	name: string
	slug: string
	bio: string
	avatar: {
		image: IGatsbyImageFluid
		full: IGatsbyImageFluid
		medium: IGatsbyImageFluid
		small: IGatsbyImageFluid
	}
}

// export interface IInstructor extends IAuthor {
// 	body: string
// 	date: string
// 	dateForSEO: string
// 	excerpt: string
// 	hero: Record<string, unknown>
// 	id: string
// 	instructor: string
// 	keywords: []
// 	secret: boolean
// 	slug: string
// 	subscription: boolean
// 	tech: string
// 	thumbnail: Record<string, unknown>
// 	timeToRead: 1
// 	title: string
// }

export interface IArticle {
	title: string
	slug: string
	canonical_url?: string
	authors: IAuthor[]
	tags: []
	excerpt: string
	category: string
	body: string
	dateForSEO?: string
	id: string
	hero: {
		full: IGatsbyImageFluid
		preview: IGatsbyImageFluid
		regular: IGatsbyImageFluid
		narrow: IGatsbyImageFluid
		seo: IGatsbyImageFixed
	}
	bannerCredit: string
	timeToRead: number
	date: string
	subscription?: boolean
}

export interface IWorkshop {
	title: string
	slug: string
	instructor: string
	excerpt: string
	body: string
	id: string
	hero: {
		full: IGatsbyImageFluid
		preview: IGatsbyImageFluid
		regular: IGatsbyImageFluid
		seo: {
			src: string
		}
	}
	tech: string
	date: string
	subscription: boolean
}

interface IArticleQuery {
	edges: {
		node: IArticle
	}[]
}

export interface IProgress {
	height: number
	offset: number
	title: string
	mode: string
	onClose?: () => void
}

export type Icon = React.FC<{
	fill?: string
	fillOut?: string
	width?: string
	height?: string
}>

export type Template = React.FC<{
	pageContext: {
		group: IArticle[]
		authors: IAuthor[]
		mailchimp: boolean
		next: IArticle[]
		index: number
		first: boolean
		last: boolean
		limit: number
		pageCount: number
		skip: number
		pathPrefix: string
		writingPath: string
		slug: string
		title: string
		additionalContext: {
			authors: []
			pathPrefix: string
			categories: []
			limit: number
			skip: number
			writingPath: string
		}
		categories: []
	}
	location: Location
}>

export type ArticleTemplate = React.RC<{
	pageContext: {
		article: IArticle
		authors: IAuthor[]
		mailchimp: boolean
		next: IArticle[]
		index: number
		first: boolean
		last: boolean
		limit: number
		pageCount: number
		skip: number
		pathPrefix: string
		writingPath: string
		slug: string
		title: string
		additionalContext: {
			authors: []
			pathPrefix: string
			categories: []
			limit: number
			skip: number
			writingPath: string
		}
		categories: []
	}
	location: Location
}>

export type AuthorTemplate = React.RC<{
	pageContext: {
		group: IArticle[]
		additionalContext: {
			authors: []
			pathPrefix: string
			categories: []
			limit: number
			skip: number
			writingPath: string
		}
	}
	location: Location
}>

export type WorkshopTemplate = React.FC<{
	pageContext: {
		workshop: IWorkshop
		mailchimp: boolean
		pageCount: number
		additionalContext: {
			basePath: string
			limit: number
			skip: number
		}
		basePath: string
		first: boolean
		index: number
		last: boolean
		limit: number
		pageCount: number
		pathPrefix: string
		skip: number
	}
	location: Location
}>
export type WorkshopsTemplate = React.FC<{
	pageContext: {
		group: IWorkshop[]
		mailchimp: boolean
		pageCount: number
		additionalContext: {
			basePath: string
			limit: number
			skip: number
		}
		basePath: string
		first: boolean
		index: number
		last: boolean
		limit: number
		pageCount: number
		pathPrefix: string
		skip: number
	}
	location: Location
}>

export type PageProps = React.FC<{
	location: Location
}>

export type CategoryProps = React.FC<{
	location: Location
	pageContext: {
		group: IArticle[]
		authors: IAuthor[]
		mailchimp: boolean
		next: IArticle[]
		index: number
		first: boolean
		last: boolean
		limit: number
		pageCount: number
		skip: number
		pathPrefix: string
		writingPath: string
		slug: string
		title: string
		category: string
		additionalContext: {
			authors: []
			pathPrefix: string
			categories: []
			limit: number
			skip: number
			writingPath: string
		}
		categories: []
	}
}>

export interface Cursor {
	color: string
	outerAlpha: number
	innerSize: number
	innerScale: number
	outerSize: number
	outerScale: number
}

export interface IArticleCategory {
	id: number;
	name: string;
	createAt: string;
}
export interface IArticleContent {
	id: number;
	title: string;
	content: string;
	cover: string;
	tags: string;
	state: boolean;
	createAt: string;
	updateAt: string;
	category: IArticleCategory;
}
export interface IArticle {
	article: IArticleContent[];
	total: number;
	pageNum: string;
	pageSize: string;
}

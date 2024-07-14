export interface Article {
  id: string;
  title: string;
  author: string;
  datePublished: string;
  imageUrl: string;
  tags: string[];
  type: "news" | "opinion" | "review";
  content: string;
  comments: Comment[];
}

export interface Comment {
  id: string;
  content: string;
  author: string;
}

export interface TranslatedContent {
  en: string;
  fr: string;
}

export interface TranslatedArticle extends Omit<Article, 'title' | 'content' | 'tags'> {
  title: TranslatedContent;
  content: TranslatedContent;
  tags: TranslatedContent[];
}
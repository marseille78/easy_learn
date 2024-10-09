import { FC, ReactNode } from "react";
import { Root } from "./Article.styled";

interface ArticleProps {
  children: ReactNode;
}

const Article: FC<ArticleProps> = ({ children }) => {
  return <Root>{children}</Root>;
};

export default Article;

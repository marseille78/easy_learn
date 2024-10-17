import { FC, ReactNode } from "react";
import { Root } from "./Article.styled";
// import Markdown from "react-markdown";

// import {la_cause} from "../../articles/fr/la_cause";
import {la_consequence_et_le_but} from "../../articles/fr/la_consequence_et_le_but";

interface ArticleProps {
  children: ReactNode;
}

const Article: FC<ArticleProps> = ({ children }) => {
  // return <Root>{children}</Root>;
  return <Root>{la_consequence_et_le_but}</Root>;
};

export default Article;

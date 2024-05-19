import { FaBookOpen, FaGamepad, FaKey, FaShapes, FaTags } from "react-icons/fa";
import PreviewLinkCard, {
  PreviewLinkCardProps,
} from "../views/PreviewLinkCard";

const previewLinkCards: PreviewLinkCardProps[] = [
  {
    title: "Manage Games",
    description: "Manage custom games that your users can play",
    icon: <FaGamepad />,
    link: "/games",
  },
  {
    title: "Manage Tags",
    description: "Manage tags that organize your game objects",
    icon: <FaTags />,
    link: "/tags",
  },
  {
    title: "Manage Game Objects",
    description: "Manage game objects used across custom games",
    icon: <FaShapes />,
    link: "/game-objects",
  },
  {
    title: "Manage API Keys",
    description: "Integrate your app with 2bttns",
    icon: <FaKey />,
    link: "/settings",
  },
  {
    title: "Documentation",
    description: "Find detailed information about 2bttns features",
    icon: <FaBookOpen />,
    link: "https://docs.2bttns.com",
    external: true,
  },
];

export type PreviewLinkCardsHomeProps = {};
export default function PreviewLinkCardsHome(props: PreviewLinkCardsHomeProps) {
  return (
    <div>
      {previewLinkCards.map((props) => (
        <div className="py-4" key="title">
          <PreviewLinkCard key={props.title} {...props} />
        </div>
      ))}
    </div>
  );
}

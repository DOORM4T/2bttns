import Link from "next/link";

export type PreviewLinkCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  external?: boolean;
};

export default function PreviewLinkCard(props: PreviewLinkCardProps) {
  const { title, description, icon, link, external = false } = props;
  return (
    <div className="card w-100 bg-base-100 shadow-xl outline outline-white outline-1">
      <div className="card-body">
        <div className="flex gap-4">
          <button className="btn btn-square btn-outline flex">
            <svg className="h-6 w-6 mt-2 ml-2">{icon}</svg>
          </button>
          <div>
            <Link href={link} target={external ? "_blank" : "_self"}>
              <h2 className="card-title">{title}</h2>
            </Link>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

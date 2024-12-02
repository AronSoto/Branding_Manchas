import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
    page: string;
    selectedPage: string;
    setSelectPage: (value: string) => void;
};

const Link: React.FC<Props> = ({ page,selectedPage,setSelectPage }: Props) => {

    const lowerCasePage = page.toLowerCase().replace(/ /g, "");

    return (
        <AnchorLink
            className={`#${selectedPage === lowerCasePage ? "text-primary-500" : ""}
            transition duration-500 hover:text-primary-300
        `}
            href={`#${lowerCasePage}`}
            onClick={() => setSelectPage(lowerCasePage)}
        >
            {page}
        </AnchorLink>
    );
};

export default Link;
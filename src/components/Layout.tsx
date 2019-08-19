import { graphql, StaticQuery } from "gatsby"
import React, { ReactNode } from "react"
import { Header } from "./Header";
import "../assets/stylesheets/app.scss";

export interface ILayoutProps
{
    children: ReactNode;
}

export class Layout extends React.Component<ILayoutProps, {}>
{
    constructor(props: ILayoutProps)
    {
        super(props);
    }

    public render(): JSX.Element
    {
        return (
            <>
                <StaticQuery query={graphql`
                    query SiteTitleQuery {
                        site {
                            siteMetadata {
                                title
                            }
                        }
                    }
                    `}
                    render={data => (
                        <>
                            <Header siteTitle={data.site.siteMetadata.title} />
                            <main role="main">{this.props.children}</main>
                            <footer role="contentinfo">
                                <div className="content">
                                    {data.site.siteMetadata.title} - &copy; {new Date().getFullYear()}
                                </div>
                            </footer>
                        </>
                    )}
                />
            </>
        );
    }
}
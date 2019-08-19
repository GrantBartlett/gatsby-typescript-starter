import React from "react"
import { Layout, ILayoutProps } from "../components/Layout"
import { SEO } from "../components/Seo"

export default class PageNotFound extends React.Component<ILayoutProps, {}>
{
    constructor(props: ILayoutProps)
    {
        super(props);
    }

    public render(): JSX.Element
    {
        return (
            <Layout>
                <div className="content">
                    <SEO title="404" />
                    <h1>Page 404 - not found</h1>
                    <p className="lead">
                        Page does not exist
                    </p>
                </div>
            </Layout>
        );
    }
}
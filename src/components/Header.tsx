import { Link } from "gatsby"
import React from "react"

export interface IHeaderProps
{
    siteTitle: string;
}

export class Header extends React.Component<IHeaderProps, {}>
{
    constructor(props: IHeaderProps)
    {
        super(props);
    }

    public render(): JSX.Element
    {
        return (
            <header className="site-header">
                <div className="content">
                    <div className="logo">
                        <h1>
                            <Link to="/">
                                {this.props.siteTitle}
                            </Link>
                        </h1>
                    </div>
                    <nav>
                        <Link to="/">Home</Link>
                        <Link to="/page-2/">Page 2</Link>
                    </nav>
                </div>
            </header>
        );
    }
}
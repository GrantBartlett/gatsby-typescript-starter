import React from "react"
import { Layout, ILayoutProps } from "../components/Layout"
import { SEO } from "../components/Seo"

export default class HomePage extends React.Component<ILayoutProps, {}>
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

					<SEO title="Home" />

					<div className="some-boxes">
						<div className="box">
							<h2>Buttons</h2>
							<button className="btn btn-sm">Hello world</button>
							<button className="btn btn-primary btn-lg">Hello world</button>
							<button className="btn btn-outline btn-xl">Hello world</button>
						</div>

						<div className="box">
							<h1>Headline h1</h1>
							<p className="lead">Some lead text followed by...</p>
							<p>Some normal text.</p>
							<ul>
								<li>Some list</li>
								<li>Some list</li>
							</ul>
						</div>
						<div className="box">
							<h2>Headline h2</h2>
							<ul>
								<li>Some list</li>
								<li>Some list</li>
							</ul>
						</div>
						<div className="box">
							<h3>Headline h3</h3>
							<ul>
								<li>Some list</li>
								<li>Some list</li>
							</ul>
						</div>
					</div>
				</div>
			</Layout>
		);
	}
}
import asset from 'next/asset'
import Link from 'next/link'


const Header = (props) => (
    <header>
		  <div>
				{(props.page == 'HomePage')? (
            		<div></div>
            		) : (
            		<Link href="/index">
            			<img id="logo-small" src={asset('/images/logo_mini.svg')} />
					</Link>
				)}
			</div>
			<ul>
				<li><Link href="/projects" passHref><a>Projets</a></Link></li>
				<li><Link href="/resources" passHref><a>Ressources</a></Link></li>
				<li><a href="https://openfisca.org/doc/">Documentation</a></li>
				<li><Link href="/community" passHref><a>Communauté</a></Link></li>
				<li><a href='https://github.com/openfisca/openfisca-france'>Code source <img src={asset('/images/GitHub-Mark-Light-64px.png')} alt=""/></a></li>
				<li><Link href="/start" passHref><a>Commencer <img src={asset('/images/icon_rocket.svg')} /></a></Link></li>
			</ul>

			<meta name="viewport" content="width=device-width, initial-scale=1"/>

		<style jsx>{`
			#logo-small {
				max-width: 4em;
				margin: 1em;
				cursor:pointer;
			}

			header {				
				background-image: linear-gradient(to top, #00baaf, #6d69fb 93%, #6d69fb);
			}

			ul {
				font-size: 1em;
				list-style-type: none;
				margin: 0.4em;
				min-height: 3em;
				display: flex;
				align-items : flex-end;
			}

			li + li {
				margin-left: 0.5em;
			}

			li {
				display: inline;
				list-style: none;
				margin: 1em;
			}

			li img {
				max-width: 1em;
				margin-right: 5px;
			}

			a {
				color: #ffffff;
				border: 1px solid #ffffff;
				border-radius: 4px;
				display: inline-block;
				padding: 6px 12px;
				font-weight: 600;
				line-height: 1.5;
				text-align: center;
				white-space: nowrap;
				vertical-align: middle;
				text-decoration: none;	
			}

			@media (max-width: 720px) {
				header{
					flex-direction: column;
				}
				ul {
                    padding: 0;
                    flex-direction: column;
                    align-items: center;
				}
			}
		`}</style>
	</header>
	)

export default Header

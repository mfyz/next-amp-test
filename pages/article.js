import Head from 'next/head'
import { useAmp } from 'next/amp'

export const config = {
	amp: 'hybrid',
}

export default function Home() {
	const isAmp = useAmp()

	return (
		<div className="site-container">
			<Head>
				<title>Next AMP Test</title>
			</Head>

			<main>
				<h1>Next AMP Test / Article Page</h1>

				<a href={isAmp ? '/article' : '/article?amp=1'}>
					{isAmp ? 'View Non-AMP' : 'View AMP'} Version
				</a>

				{isAmp && (
					<amp-img
						alt="Mountains"
						width="550"
						height="368"
						layout="responsive"
						src="https://amp.dev/static/inline-examples/images/mountains.webp"
					></amp-img>
				)}
				
				{!isAmp && (
					<div>
						<img
							alt="Mountains"
							width="550"
							height="368"
							src="https://amp.dev/static/inline-examples/images/mountains.webp"
						/>
					</div>
				)}

				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium aliquid eaque ducimus iste cupiditate distinctio minima tenetur deleniti, suscipit quod! Laudantium nostrum porro, odio enim aut repellat? Amet, impedit iste.</p>
			</main>
			<style jsx>{`
				h1 {
					margin-bottom: 5px;
				}
				p {
					font-size: 18px;
					line-height: 30px;
					margin-top: 30px;
				}
			`}</style>
		</div>
	)
}

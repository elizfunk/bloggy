import {NavBar} from "../navigation/NavBar"

const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: 'calc(100vh - 64px)',
    fontFamily: 'Raleway',
    padding: '20px',
  } as const

export const BlogPage = () => {
    return (
        <>
            <NavBar />
            <div css={containerStyles}>
                <h1>
                    THE BLOG
                </h1>
            </div>
        </>
    )
}

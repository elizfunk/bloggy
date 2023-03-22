import {createContext, Dispatch, useState} from 'react'

type BlogPostEditorPageContextValues = {
  title: string
  setTitle: Dispatch<React.SetStateAction<string>>
  subtitle: string
  setSubtitle: Dispatch<React.SetStateAction<string>>
  description: string
  setDescription: Dispatch<React.SetStateAction<string>>
  author: string
  setAuthor: Dispatch<React.SetStateAction<string>>
  tags: string
  setTags: Dispatch<React.SetStateAction<string>>
}

type Props = {
  children: JSX.Element[] | JSX.Element
}

// set slug, created date and last updated date independently
// TODO: think about individual post urls
export const BlogPostEditorPageContext =
  createContext<BlogPostEditorPageContextValues>({
    title: '',
    setTitle: () => '',
    subtitle: '',
    setSubtitle: () => '',
    description: '',
    setDescription: () => '',
    author: '',
    setAuthor: () => '',
    tags: '',
    setTags: () => '',
  })

export const BlogPostEditorPageProvider = ({children}: Props) => {
  const [title, setTitle] = useState<string>('')
  const [subtitle, setSubtitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [author, setAuthor] = useState<string>('')
  const [tags, setTags] = useState<string>('')

  return (
    <BlogPostEditorPageContext.Provider
      value={{
        title,
        setTitle,
        subtitle,
        setSubtitle,
        description,
        setDescription,
        author,
        setAuthor,
        tags,
        setTags,
      }}
    >
      {children}
    </BlogPostEditorPageContext.Provider>
  )
}

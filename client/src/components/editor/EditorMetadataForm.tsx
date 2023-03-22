import {CSSObject} from '@emotion/react'
import {useContext} from 'react'

import {TextInputField} from '@/components/ui/forms/TextInputField'
import {BlogPostEditorPageContext} from '@/contexts/BlogPostEditorPageContext'

const FieldWrapperStyles: CSSObject = {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
}

export const EditorMetadataForm = () => {
  const {
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
  } = useContext(BlogPostEditorPageContext)

  // TODO: useEffect or useCallback?
  const fields = [
    {
      type: 'text',
      name: 'title',
      id: 'title',
      value: title,
      handleChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setTitle(e.target.value),
    },
    {
      type: 'text',
      name: 'subtitle',
      id: 'subtitle',
      value: subtitle,
      handleChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setSubtitle(e.target.value),
    },
    {
      type: 'text',
      name: 'description',
      id: 'description',
      value: description,
      handleChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setDescription(e.target.value),
    },
    {
      type: 'text',
      name: 'author',
      id: 'author',
      value: author,
      handleChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setAuthor(e.target.value),
    },
    {
      type: 'text',
      name: 'tags',
      id: 'tags',
      value: tags,
      handleChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setTags(e.target.value),
    },
  ]

  return (
    <form>
      {fields.map((field) => (
        <div key={field.id} css={FieldWrapperStyles}>
          <label htmlFor={field.id}>{field.name}</label>
          <TextInputField
            type={field.type}
            name={field.name}
            id={field.id}
            value={field.value}
            handleChange={field.handleChange}
          />
        </div>
      ))}
    </form>
  )
}

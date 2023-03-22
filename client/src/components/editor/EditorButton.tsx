import {useLexicalComposerContext} from '@lexical/react/LexicalComposerContext'
import {useContext} from 'react'

import {Button} from '@/components/ui/Button'
import {BlogPostEditorPageContext} from '@/contexts/BlogPostEditorPageContext'

export const EditorButton = () => {
  const [editor] = useLexicalComposerContext()
  const {title, subtitle, description, author, tags} = useContext(
    BlogPostEditorPageContext,
  )

  const saveChanges = () => {
    // build JSON of editor/editorState
    let articleBody
    const editorState = editor.getEditorState()
    editorState.read(() => {
      // TODO: Do I need to stringify this?
      articleBody = editorState.toJSON()
    })

    // TODO: create slug field that is a primary key in the DB?

    const data = {
      title,
      subtitle,
      description,
      author,
      tags,
      articleBody,
    }
    console.log({data})
    // api call to save to existing post or to create a new post
    // TODO: handle API response here or somewhere else?
    // TODO: Trigger parent loading screen or loading overlay?
  }

  return (
    <Button
      buttonText='Save Changes'
      buttonStyle='Action'
      handleClick={saveChanges}
    />
  )
}

import {useEffect} from 'react'
import {CSSObject} from '@emotion/react'
import {$getRoot, $getSelection} from 'lexical'

import {LexicalComposer} from '@lexical/react/LexicalComposer'
import {PlainTextPlugin} from '@lexical/react/LexicalPlainTextPlugin'
import {ContentEditable} from '@lexical/react/LexicalContentEditable'
import {HistoryPlugin} from '@lexical/react/LexicalHistoryPlugin'
import {OnChangePlugin} from '@lexical/react/LexicalOnChangePlugin'
import {useLexicalComposerContext} from '@lexical/react/LexicalComposerContext'
import {EditorState} from 'lexical'

import {PageWrapperDashboard} from './PageWrapperDashboard'

const OutsideWrapperStyles: CSSObject = {
  minHeight: '400px',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  fontFamily: 'Raleway',
  padding: '20px',
}

const ContainerStyles: CSSObject = {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '700px',
  fontFamily: 'Raleway',
  padding: '36px',
  border: '1px solid #e6e6e6',
  ["@media (min-width: 701px)"]: {
    minWidth: '700px',
  },
  ["@media (max-width: 700px)"]: {
    width: '100%',
  },
}

const EditorWrapper: CSSObject = {
  position: 'relative',
}

const PlaceholderStyles: CSSObject = {
  color: '#999999',
  overflow: 'hidden',
  position: 'absolute',
  textOverflow: 'ellipsis',
  top: '15px',
  left: '10px',
  fontSize: '15px',
  userSelect: 'none',
  display: 'inline-block',
  pointerEvents: 'none',
}

const theme = {
  // Theme styling goes here
}

// When the editor changes, you can get notified via the
// LexicalOnChangePlugin!
function onChange(editorState: EditorState) {
  editorState.read(() => {
    // Read the contents of the EditorState here.
    const root = $getRoot()
    const selection = $getSelection()

    console.log({root, selection})

    console.log("getTextContent:", root.getTextContent())
    console.log("getAllTextNodes:", root.getAllTextNodes())


  })
}

// Lexical React plugins are React components, which makes them
// highly composable. Furthermore, you can lazy load plugins if
// desired, so you don't pay the cost for plugins until you
// actually use them.
function MyCustomAutoFocusPlugin() {
  const [editor] = useLexicalComposerContext()

  useEffect(() => {
    // Focus the editor when the effect fires!
    editor.focus()
  }, [editor])

  return null
}

// Catch any errors that occur during Lexical updates and log them
// or throw them as needed. If you don't throw them, Lexical will
// try to recover gracefully without losing user data.
function onError(error: Error) {
  console.error(error)
}

const Placeholder: React.FC = () => {
  return (
    <div css={PlaceholderStyles}>Enter some text...</div>
  )
}

function Editor() {
  const initialConfig = {
    namespace: 'MyEditor', 
    theme,
    onError,
  }

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <PlainTextPlugin
        contentEditable={<ContentEditable />}
        placeholder={<Placeholder />}
      />
      <OnChangePlugin onChange={onChange} />
      <HistoryPlugin />
      <MyCustomAutoFocusPlugin />
    </LexicalComposer>
  )
}

export const BlogPostEditorPage: React.FC = () => {
  return (
    <PageWrapperDashboard>
      <main css={OutsideWrapperStyles}>
        <div css={ContainerStyles}>
          <div css={EditorWrapper}>
            <Editor />
          </div>
        </div>
      </main>
    </PageWrapperDashboard>
  )
}

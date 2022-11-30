import {CodeHighlightNode, CodeNode} from '@lexical/code'
import {AutoLinkNode, LinkNode} from '@lexical/link'
import {ListItemNode, ListNode} from '@lexical/list'
import {TRANSFORMERS} from '@lexical/markdown'
import {AutoFocusPlugin} from '@lexical/react/LexicalAutoFocusPlugin'
import {LexicalComposer} from '@lexical/react/LexicalComposer'
import {ContentEditable} from '@lexical/react/LexicalContentEditable'
import {HistoryPlugin} from '@lexical/react/LexicalHistoryPlugin'
import {LinkPlugin} from '@lexical/react/LexicalLinkPlugin'
import {ListPlugin} from '@lexical/react/LexicalListPlugin'
import {MarkdownShortcutPlugin} from '@lexical/react/LexicalMarkdownShortcutPlugin'
import {OnChangePlugin} from '@lexical/react/LexicalOnChangePlugin'
import {RichTextPlugin} from '@lexical/react/LexicalRichTextPlugin'
import {HeadingNode, QuoteNode} from '@lexical/rich-text'
import {TableCellNode, TableNode, TableRowNode} from '@lexical/table'
import {$getRoot, $getSelection, EditorState} from 'lexical'

import {EditorTheme} from '@/components/editor/EditorTheme'
import AutoLinkPlugin from '@/components/editor/plugins/AutoLinkPlugin'
import CodeHighlightPlugin from '@/components/editor/plugins/CodeHighlightPlugin'
import {ListMaxIndentLevelPlugin} from '@/components/editor/plugins/ListMaxIndentLevelPlugin'
import ToolbarPlugin from '@/components/editor/plugins/ToolbarPlugin'
import TreeViewPlugin from '@/components/editor/plugins/TreeViewPlugin'
import '@/components/editor/styles.css'

function Placeholder() {
  return <div className='editor-placeholder'>Enter some rich text...</div>
}

const editorConfig = {
  namespace: 'BlogPostEditor',
  // The editor theme
  theme: EditorTheme,
  // Handling of errors during update
  onError(error: Error) {
    throw error
  },
  // Any custom nodes go here
  nodes: [
    HeadingNode,
    ListNode,
    ListItemNode,
    QuoteNode,
    CodeNode,
    CodeHighlightNode,
    TableNode,
    TableCellNode,
    TableRowNode,
    AutoLinkNode,
    LinkNode,
  ],
}

export default function Editor() {
  // TODO: move function to external file -- it's not dependent on values from this component
  const onChange = (editorState: EditorState) => {
    console.log('JSON.stringify(editorState):', JSON.stringify(editorState))
    console.log('editorState:', editorState)
    console.log('editorState.toJSON()', editorState.toJSON())
    editorState.read(() => {
      const root = $getRoot()
      const selection = $getSelection()

      console.log({root, selection})
      console.log('root.exportJSON:', root.exportJSON())
      console.log('root.getTextContent:', root.getTextContent())
    })
  }
  return (
    <LexicalComposer initialConfig={editorConfig}>
      <div className='editor-container'>
        <ToolbarPlugin />
        <div className='editor-inner'>
          <RichTextPlugin
            contentEditable={<ContentEditable className='editor-input' />}
            placeholder={<Placeholder />}
          />
          <HistoryPlugin />
          <TreeViewPlugin />
          <AutoFocusPlugin />
          <CodeHighlightPlugin />
          <ListPlugin />
          <LinkPlugin />
          <AutoLinkPlugin />
          <ListMaxIndentLevelPlugin maxDepth={7} />
          <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
          <OnChangePlugin onChange={onChange} />
        </div>
      </div>
    </LexicalComposer>
  )
}

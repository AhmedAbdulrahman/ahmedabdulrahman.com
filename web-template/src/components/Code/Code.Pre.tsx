/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as React from 'react'
import CodeBlock from './Code.Prism'

const preToCodeBlock = (preProps) => {
	if (preProps.children && preProps.children.props && preProps.children.props.mdxType === 'code') {
		const { children: codeString, className = '', ...props } = preProps.children.props

		const matches = className.match(/language-(?<lang>.*)/)

		return {
			codeString: codeString.trim(),
			className,
			language: matches && matches.groups && matches.groups.lang ? matches.groups.lang : '',
			...props,
		}
	}
}

const CodePre = (preProps) => {
	const props = preToCodeBlock(preProps)

	if (props) {
		return <CodeBlock {...props} />
	}
	return <pre {...preProps} />
}

export default CodePre

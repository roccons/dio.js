/**
 * @param {*} element
 * @param {Writable?} container
 * @param {function=} callback
 */
function renderToString (element, container, callback) {
	if (!container || !container.writable)
		return getElementDefinition(element).toString()

	setHeader(container)
	container.end(getElementDefinition(element).toString(), 'utf8', callback)
}

/**
 * @param {*} element
 * @param {Writable?} container
 * @param {function=} callback
 */
function renderToNodeStream (element, container, callback) {
	if (!container || !container.writable)
		return getElementDefinition(element).toStream()

	setHeader(container)
	getElementDefinition(element).toStream(callback).pipe(container)
}


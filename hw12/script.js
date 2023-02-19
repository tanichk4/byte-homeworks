
const createToolTip = (button, text) => {

    const tooltip = document.createElement('div')
    tooltip.classList.add('tooltip')

    tooltip.innerText = text


    document.body.append(tooltip);

    const anchorElemCoords = button.getBoundingClientRect()

    const tooltipTop = anchorElemCoords.top - 10 - tooltip.clientHeight

    const tooltipLeft = anchorElemCoords.left + anchorElemCoords.width / 2 - tooltip.clientWidth / 2;
    tooltip.style.top = `${tooltipTop}px`
    tooltip.style.left = `${tooltipLeft}px`
}
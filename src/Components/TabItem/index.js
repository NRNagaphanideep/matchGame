import './index.css'

const TabItem = props => {
  const {tabDetails, isActive, updateActiveTabId} = props
  const {tabId, displayText} = tabDetails
  const activeTabClassName = isActive ? 'active-tab-btn' : 'tab-btn'
  const onClickTabITem = () => {
    updateActiveTabId(tabId)
  }

  return (
    <li className="tab-item-container">
      <button
        type="button"
        className={activeTabClassName}
        onClick={onClickTabITem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem

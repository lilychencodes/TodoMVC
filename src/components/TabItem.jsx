import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import {
  updateCurrentTab
} from '../actions/index'

import './TabItem.css'

import debugRender from 'react-render-debugger'

class TabItem extends Component {
  constructor(props) {
    super(props)

    this.setCurrentTab = this.setCurrentTab.bind(this)
  }

  setCurrentTab() {
    const { tab, updateCurrentTab } = this.props

    updateCurrentTab(tab)
  }

  render() {
    const { tab, currentTab } = this.props

    return (
      <div className={`tab ${currentTab === tab && 'active'}`} onClick={this.setCurrentTab}>
        {tab}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentTab: state.todos.currentTab
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  updateCurrentTab
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TabItem)
// debugRender(TabItem)

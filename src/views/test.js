import React, { Component } from 'react';
import { connect } from 'react-redux'
import { makeFalse, makeTrue } from '../state/actions/actions'

class _Test extends Component {

    render() {
        const { test } = this.props
        return (
            <div>
                {console.log(this.props)}
                <button onClick={() => this.props.makeTrue()}>
                    make test true
                </button>
                <button onClick={() => this.props.makeFalse()}>
                    make test false
                </button>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    test: state.test
})
const mapDispatchToProps = (dispatch) => {
    return {
        makeTrue: () => dispatch(makeTrue()),
        makeFalse: () => dispatch(makeFalse())
    }
}
export const Test = connect(mapStateToProps, mapDispatchToProps)(_Test)
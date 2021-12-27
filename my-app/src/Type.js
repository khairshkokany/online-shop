import React, { Component } from 'react'

export default class type extends Component {
    render() {
        return (
            <div>
                <button formAction='/main' type="button" class="btn btn-success">Buyer</button>
                <button formAction='/seller' type="button" class="btn btn-danger">Seller</button>
            </div>
        )
    }
}

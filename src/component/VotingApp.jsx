import React from 'react';
import products from '../utils/seed.js'

class ProductList extends React.Component {
    render() {
        
        return (
            <div className="items">
                {products.map(product => (
                    <Product
                        key={'product-' + product.id}
                        id={product.id}
                        title={product.title}
                        description={product.description}
                        url={product.url}
                        votes={product.votes}
                        submitterAvatarUrl={product.submitterAvatarUrl}
                        productImageUrl={product.productImageUrl}
                    />
                ))}
            </div>
        );
    }
}

class Product extends React.Component {
    render() {
        return (
            
            <div className="item">
                <div className="image">
                    <img src={this.props.productImageUrl} alt="aqua"/>
                </div>
                <div className="votes">
                        <a href="/">UP</a>
                        {this.props.votes}
                    </div>
                <div className="middle">
                    <div className="description">
                        <a href={this.props.url}>{this.props.title}</a>
                        <p>{this.props.description}</p>
                    </div>
                    <div className="extra">
                        <span>Submitted by:</span>
                        <img src={this.props.submitterAvatarUrl} alt="daniel"/>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default ProductList;
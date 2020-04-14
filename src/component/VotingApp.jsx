import React from 'react';
import products from '../utils/votingAppSeed.js'

class ProductList extends React.Component {
    
    state = { 
        products: [],
    };

    componentDidMount() {
        this.setState({ products: products });
    }

    // Function passed down as props
    handleProductUpVote = (productId) => {
        const nextProducts = this.state.products.map((product) => {
            if (product.id === productId) {
                // Object.assign create a new object {} with product properties
                return Object.assign({}, product, {
                    votes: product.votes + 1,
                })
            } else {
                return product;
            }
        });
        this.setState({
            products: nextProducts,
        });
    }

    render() {
        return (
            <div className="items">
                {this.state.products.sort((a, b) => b.votes - a.votes).map(product => (
                    <Product
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        description={product.description}
                        url={product.url}
                        votes={product.votes}
                        submitterAvatarUrl={product.submitterAvatarUrl}
                        productImageUrl={product.productImageUrl}
                        onVote={this.handleProductUpVote}
                    />
                ))}
            </div>
        );
    }
}

class Product extends React.Component {

    handleUpVote = () => {
        this.props.onVote(this.props.id)
    }

    render() {

        return (
            
            <div className="item">
                <div className="image">
                    <img src={this.props.productImageUrl} alt="aqua"/>
                </div>
                <div className="votes">
                        <p onClick={this.handleUpVote}>UP</p>
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
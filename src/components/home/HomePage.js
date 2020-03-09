import React from 'react';
import { Accordion } from 'react-bootstrap';
import Article from '../articles/Article';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as newsActions from '../../redux/actions/newsActions';

class HomePage extends React.Component {
  componentWillMount() {
    this.props.actions.loadNews(this.props.match.params.id).catch(error => {
      alert('Loading News failed' + error);
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.news.country !== this.props.match.params.id) {
      this.props.actions.loadNews(this.props.match.params.id).catch(error => {
        alert('Loading News failed' + error);
      });
    }
  }

  render() {
    if (this.props.news.news !== undefined) {
      if (this.props.news.news.totalResults > 0) {
        return (
          <div className="row news-container">
            <Accordion defaultActiveKey="0">
              {this.props.news.news.articles.map(article => (
                <Article article={article}></Article>
              ))}
            </Accordion>
          </div>
        );
      } else {
        return (
          <div className="news-container">
            <center>No news for {this.props.news.country}</center>
          </div>
        );
      }
    } else {
      return (
        <div className="news-container">
          <center>Loading...</center>
        </div>
      );
    }
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(newsActions, dispatch)
  };
}

function mapStateToProps(state) {
  return {
    news: state.news
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

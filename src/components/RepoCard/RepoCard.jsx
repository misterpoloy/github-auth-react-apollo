import React from 'react';
import { Card, Icon, Button } from 'antd';
import { Mutation } from 'react-apollo';
import ADD_STAR from '../../queries/ADD_STAR';
import REMOVE_STAR from '../../queries/REMOVE_STAR';
import GET_REPOS from '../../queries/GET_REPOS';

export default props => (
  <Card
    style={{ marginTop: 16 }}
    type="inner"
    title={props.name}
    extra={
      <div>
        {props.viewerHasStarred ? (
          <Mutation mutation={ REMOVE_STAR } update={
            (store, { data }) => {
              // Update local
              const copyData = store.readQuery({ query: GET_REPOS, variables: { number_of_repos: props.max } });
              const currentRepo = copyData.viewer.repositories.nodes.find(repo => repo.id === props.id);
              currentRepo.viewerHasStarred = data.removeStar.starrable.viewerHasStarred;
              store.writeQuery({ query: GET_REPOS, data: copyData })
            }
        }>
            {(removeStar, { loading }) => {
              return (
                <Button
                  disable={ loading ? 'true' : 'false' }
                  onClick={e => {
                    e.preventDefault();
                    removeStar({ variables: { starrableId: props.id }})
                }}>
                  <Icon type="star" theme="filled" /> remove Star
                </Button>
              );
            }}
          </Mutation>
        ) : (
          <Mutation mutation={ ADD_STAR } update={
            (store, { data }) => {
              // Update local
              const copyData = store.readQuery({ query: GET_REPOS, variables: { number_of_repos: props.max } });
              const currentRepo = copyData.viewer.repositories.nodes.find(repo => repo.id === props.id);
              currentRepo.viewerHasStarred = data.addStar.starrable.viewerHasStarred;
              store.writeQuery({ query: GET_REPOS, data: copyData })
            }
        }>
            {(addStar, { loading }) => {
              return (
                <Button
                  disable={ loading ? 'true' : 'false' }
                  onClick={e => {
                    e.preventDefault();
                    addStar({ variables: { starrableId: props.id }})
                }}>
                  <Icon type="star" /> Add Star 
                </Button>
              );
            }}
          </Mutation>
        )}
        <a target="blank" href={props.url}> Open in github</a>
      </div>
    }
    >
    {props.descriptionHTML !== "<div></div>" ? (
      <div dangerouslySetInnerHTML={{ __html: props.descriptionHTML }} />
    ) : 'Repo has no description'}
  </Card>
);

import React from 'react';
import { Card, Icon, Button } from 'antd';

export default props => (
  <Card
    style={{ marginTop: 16 }}
    type="inner"
    title={props.name}
    extra={
      <div>
        <Button>
        {props.viewerHasStarred ? (
          <div><Icon type="star" theme="filled" /> remove Star</div>
        ) : (
          <div><Icon type="star" /> Add Star</div> 
        )}
        </Button>
        <a target="blank" href={props.url}> Open in github</a>
      </div>
    }
    >
    {props.descriptionHTML !== "<div></div>" ? (
      <div dangerouslySetInnerHTML={{ __html: props.descriptionHTML }} />
    ) : 'Repo has no description'}
  </Card>
);

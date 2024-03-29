import { Comment, Tooltip, List, Rate } from 'antd';
import moment from 'moment';

interface Props {
  reviews: any;
}

const Reviews = ({ reviews }: Props) => {
  const createReviewData = () => {
    return reviews && reviews.map((review: any) => {
      return {
        actions: [<Rate disabled defaultValue={review.rating} />],
        author: review.name,
        avatar: `https://picsum.photos/id/${Math.ceil(Math.random() * 99)}/100/100`,
        content: (<p>{review.review}</p>),
        datetime: (
          <Tooltip
            title={moment()
              .subtract(1, 'days')
              .format('YYYY-MM-DD HH:mm:ss')}
          >
            <span>
              {moment(review.created_on)
                .subtract(1, 'days')
                .fromNow()}
            </span>
          </Tooltip>
        ),
      }
    });
  };

  return (
    <List
      className="comment-list"
      header={`${createReviewData().length} Reviews`}
      itemLayout="horizontal"
      dataSource={createReviewData()}
      renderItem={(item: any) => (
        <li>
          <Comment
            actions={item.actions}
            author={item.author}
            avatar={item.avatar}
            content={item.content}
            datetime={item.datetime}
          />
        </li>
      )}
    />
  );
};

export default Reviews;

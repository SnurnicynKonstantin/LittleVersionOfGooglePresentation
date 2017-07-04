import React from 'react';
import SlideItem from './SlideItem';
import NewSlideItem from './NewSlideItem';

class SlideList extends React.Component {

    render() {

        let rows = [];

        let changeSlideId = this.props.changeSlideId;

        rows.push(<div className="col-lg-12"><NewSlideItem
            key={0}
            changeSlideId={changeSlideId}
        /></div>);

        this.props.slides.forEach(function(slide) {
            rows.push(<div className="col-lg-12"><SlideItem
               slide={slide}
               key={slide.id}
               changeSlideId={changeSlideId}
            /></div>);
        });


        return (
            <div className="col-md-4">
                {rows}
            </div>
        );
    }
}


export default SlideList;
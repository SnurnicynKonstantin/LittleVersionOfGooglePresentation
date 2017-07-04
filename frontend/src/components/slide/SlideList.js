import React from 'react';
import SlideItem from './SlideItem';

class SlideList extends React.Component {

    render() {

        let rows = [];

        let changeSlideId = this.props.changeSlideId;

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
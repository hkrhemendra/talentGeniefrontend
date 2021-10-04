    // REACT SLICK SLIDER
    function NextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block",right:"-32px",borderRadius:"100%", background:"transparent"}}
            onClick={onClick}
          />
        );
      }
      
      function PrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block",left:"-46px",borderRadius:"100%", background: "transparent" }}
            onClick={onClick}
          />
        );
      }
    

export {NextArrow, PrevArrow};
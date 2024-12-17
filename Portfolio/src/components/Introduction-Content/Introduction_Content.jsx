const Introduction_Content = () => {
    const textLines=[
    { text: 'We develop intelligent solutions based on our' },
    { text: 'Data Science platform to help professionals' },
    { text: 'make their job easier and more efficient.' },
    { text: 'Our team consists of experts in Machine'},
    {
        text:"Learning",
        imageSrc:""
    },
    {
        text:", Natural Language Processing",
        imageSrc:""
    },
    {text:','},
    {
        text:"Linguistics",
        imageSrc:"",
        imageClass:""
    },
    {
        text:"and Software Engineering",
        imageSrc:""
    },
    {text:"."}
    ];
    return (
      <div id="discover" className="big_tx_wrap">
        {textLines.map((line, index) => "")}
      </div>
    );
    
};
export default Introduction_Content;

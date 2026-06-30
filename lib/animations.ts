export const fadeUp={
  initial:{
    opacity:0,
    y:60
  },
  whileInView:{
    opacity:1,
    y:0
  },
  viewport:{
    once:true
  },
  transition:{
    duration:.6
  }
};

export const fadeLeft={
  initial:{
    opacity:0,
    x:-60
  },
  whileInView:{
    opacity:1,
    x:0
  },
  viewport:{
    once:true
  },
  transition:{
    duration:.6
  }
};

export const fadeRight={
  initial:{
    opacity:0,
    x:60
  },
  whileInView:{
    opacity:1,
    x:0
  },
  viewport:{
    once:true
  },
  transition:{
    duration:.6
  }
};

export const zoom={
  initial:{
    opacity:0,
    scale:.9
  },
  whileInView:{
    opacity:1,
    scale:1
  },
  viewport:{
    once:true
  },
  transition:{
    duration:.6
  }
};
import Post from './models/post';
import Comment from './models/comment';

export default function () {
  Post.count().exec((err, count) => {
    if (count > 0) {
      return;
    }

    const content1 = `In Scripture, a type is an event or person, within 
      the flow of redemptive history, that foreshadows what comes later. 
      The event is repeated later, or the person “reappears,” thus establishingi
      a parallel between the first act of God and what comes later. But when the
      later reenactment comes in Christ, it is so much greater and grander than 
      what came earlier and what merely pointed toward him. Those were anticipations
      ; he is the realization of what was anticipated. David Wells, God in the Whirlwind`;

    const content2 = `But when the fullness of time had come, God sent forth his Son, born
      of woman, born under the law, 5 to redeem those who were under the law, so that we 
      might receive adoption as sons. 6 And because you are sons, God has sent the Spirit
      of his Son into our hearts, crying, “Abba! Father!” 7 So you are no longer a slave, 
      but a son, and if a son, then an heir through God. (ESV)`;

    const post1 = new Post({ username: 'gwleong@gmail.com', title: 'Type and Shadows', slug: 'types-and-shadows hello-magic-leap', cuid: 'cikqgkv4q01ck7453ualdn3hd', content: content1 });
    const post2 = new Post({ username: 'gwleong@gmail.com', title: 'Galatians 4:4-7', slug: 'galatians', cuid: 'cikqgkv4q01ck7453ualdn3hf', content: content2 });

    Post.create([post1, post2], (error) => {
      if (!error) {
        // console.log('ready to go....');
      }
    });
  });

  Comment.count().exec((err, count) => {
    if (count > 0) {
      return;
    }

    const content1 = `In Scripture, a type is an event or person, within 
      the flow of redemptive history, that foreshadows what comes later. 
      The event is repeated later, or the person “reappears,” thus establishingi
      a parallel between the first act of God and what comes later. But when the
      later reenactment comes in Christ, it is so much greater and grander than 
      what came earlier and what merely pointed toward him. Those were anticipations
      ; he is the realization of what was anticipated. David Wells, God in the Whirlwind`;

    const content2 = `But when the fullness of time had come, God sent forth his Son, born
      of woman, born under the law, 5 to redeem those who were under the law, so that we 
      might receive adoption as sons. 6 And because you are sons, God has sent the Spirit
      of his Son into our hearts, crying, “Abba! Father!” 7 So you are no longer a slave, 
      but a son, and if a son, then an heir through God. (ESV)`;

    const comment1 = new Comment({ username: 'gwleong@gmail.com', postID: 'types-and-shadows-cikqgkv4q01ck7453ualdn3hd', content: content1 });
    const comment2 = new Comment({ username: 'gwleong@gmail.com', postID: 'galatians-cikqgkv4q01ck7453ualdn3hf', content: content2 });

    Comment.create([comment1, comment2], (error) => {
      if (!error) {
        // console.log('ready to go....');
      }
    });
  });
}

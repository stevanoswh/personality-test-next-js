import { Test } from '@/types/quiz'

export const personalityTests: Test[] = [
  {
    id: 'introvert-extrovert',
    name: 'Introvert or Extrovert?',
    questions: [
      {
        text: 'How do you feel about large social gatherings?',
        answers: [
          { text: 'I love them!', score: 2 },
          { text: 'They\'re okay sometimes', score: 1 },
          { text: 'I prefer smaller groups', score: 0 },
          { text: 'I avoid them if possible', score: -1 },
        ],
      },
      {
        text: 'After a long day, you prefer to:',
        answers: [
          { text: 'Go out with friends', score: 2 },
          { text: 'Have a quiet evening at home', score: -1 },
          { text: 'Call a friend', score: 1 },
          { text: 'Spend time on a solitary hobby', score: -2 },
        ],
      },
      {
        text: 'How do you recharge your energy?',
        answers: [
          { text: 'By being around people', score: 2 },
          { text: 'By spending time alone', score: -2 },
          { text: 'A mix of both', score: 0 },
          { text: 'Through physical activities', score: 1 },
        ],
      },
      {
        text: 'In a group project, you usually:',
        answers: [
          { text: 'Take the lead and delegate tasks', score: 2 },
          { text: 'Prefer to work on your part independently', score: -1 },
          { text: 'Enjoy collaborating with others', score: 1 },
          { text: 'Feel uncomfortable and stressed', score: -2 },
        ],
      },
      {
        text: 'Your ideal weekend involves:',
        answers: [
          { text: 'Attending a party or social event', score: 2 },
          { text: 'Staying in and relaxing', score: -2 },
          { text: 'Meeting a close friend for coffee', score: 1 },
          { text: 'Going on a solo adventure', score: -1 },
        ],
      },
      {
        text: 'When you have a problem, you prefer to:',
        answers: [
          { text: 'Talk it out with friends', score: 2 },
          { text: 'Reflect on it alone', score: -2 },
          { text: 'Seek advice from one trusted person', score: 1 },
          { text: 'Write about it in a journal', score: -1 },
        ],
      },
      {
        text: 'In conversations, you tend to:',
        answers: [
          { text: 'Speak more than listen', score: 2 },
          { text: 'Listen more than speak', score: -1 },
          { text: 'Contribute equally', score: 1 },
          { text: 'Prefer to observe', score: -2 },
        ],
      },
      {
        text: 'How do you feel about public speaking?',
        answers: [
          { text: 'I enjoy it and seek opportunities', score: 2 },
          { text: 'I\'m comfortable with it', score: 1 },
          { text: 'I get nervous but can do it', score: 0 },
          { text: 'I avoid it at all costs', score: -2 },
        ],
      },
      {
        text: 'When meeting new people, you:',
        answers: [
          { text: 'Find it energizing and exciting', score: 2 },
          { text: 'Feel a bit anxious but manage', score: 0 },
          { text: 'Prefer to have a familiar person with you', score: -1 },
          { text: 'Find it draining and uncomfortable', score: -2 },
        ],
      },
      {
        text: 'Your preferred work environment is:',
        answers: [
          { text: 'An open office with lots of interaction', score: 2 },
          { text: 'A private office where you can focus', score: -2 },
          { text: 'A mix of collaborative and private spaces', score: 1 },
          { text: 'Working from home', score: -1 },
        ],
      },
      {
        text: 'When you have free time, you usually:',
        answers: [
          { text: 'Reach out to friends to make plans', score: 2 },
          { text: 'Enjoy solitary activities', score: -2 },
          { text: 'Balance between social and alone time', score: 0 },
          { text: 'Spend time with family', score: 1 },
        ],
      },
      {
        text: 'In a new social situation, you tend to:',
        answers: [
          { text: 'Introduce yourself and start conversations', score: 2 },
          { text: 'Wait for others to approach you', score: -1 },
          { text: 'Stick close to people you know', score: 0 },
          { text: 'Feel uncomfortable and look for an exit', score: -2 },
        ],
      },
      {
        text: 'Your idea of a perfect vacation is:',
        answers: [
          { text: 'A group tour with lots of activities', score: 2 },
          { text: 'A quiet retreat in nature', score: -2 },
          { text: 'Exploring a new city with a close friend', score: 1 },
          { text: 'A staycation with occasional outings', score: 0 },
        ],
      },
      {
        text: 'When working on a task, you prefer:',
        answers: [
          { text: 'Collaborating with a team', score: 2 },
          { text: 'Working independently', score: -2 },
          { text: 'A mix of teamwork and solo work', score: 1 },
          { text: 'Partnering with one other person', score: 0 },
        ],
      },
      {
        text: 'After an intense social event, you feel:',
        answers: [
          { text: 'Energized and ready for more', score: 2 },
          { text: 'Exhausted and need alone time', score: -2 },
          { text: 'Satisfied but ready to relax', score: 1 },
          { text: 'Reflective about the interactions', score: 0 },
        ],
      },
      {
        text: 'Your preferred method of communication is:',
        answers: [
          { text: 'In-person conversations', score: 2 },
          { text: 'Text or email', score: -1 },
          { text: 'Phone calls', score: 1 },
          { text: 'Written letters', score: -2 },
        ],
      },
      {
        text: 'In your free time, you\'re most likely to:',
        answers: [
          { text: 'Attend a social event or party', score: 2 },
          { text: 'Read a book or watch a movie alone', score: -2 },
          { text: 'Have a small gathering with close friends', score: 1 },
          { text: 'Pursue a solitary hobby', score: -1 },
        ],
      },
      {
        text: 'When faced with a challenge, you prefer to:',
        answers: [
          { text: 'Brainstorm solutions with others', score: 2 },
          { text: 'Think it through on your own', score: -2 },
          { text: 'Discuss it with one trusted advisor', score: 1 },
          { text: 'Research and analyze independently', score: -1 },
        ],
      },
      {
        text: 'Your ideal living situation is:',
        answers: [
          { text: 'With roommates or a large family', score: 2 },
          { text: 'Living alone', score: -2 },
          { text: 'With a partner or one close friend', score: 1 },
          { text: 'In a quiet neighborhood with minimal interaction', score: -1 },
        ],
      },
      {
        text: 'When learning something new, you prefer:',
        answers: [
          { text: 'Group classes or workshops', score: 2 },
          { text: 'Self-study with books or online resources', score: -2 },
          { text: 'One-on-one tutoring', score: 1 },
          { text: 'A mix of group and individual learning', score: 0 },
        ],
      },
    ],
    results: {
      extrovert: 'You are an extrovert! You thrive in social situations and gain energy from being around others.',
      introvert: 'You are an introvert! You value your alone time and find peace in solitude.',
      ambivert: 'You are an ambivert! You have a good balance between extrovert and introvert traits, adapting well to both social and solitary environments.',
    },
  },
  {
    id: 'mbti',
    name: 'MBTI Personality Type',
    questions: [
      {
        text: 'When making decisions, do you prefer to:',
        answers: [
          { text: 'Follow your heart and emotions', score: { F: 1 } },
          { text: 'Use logic and rational thinking', score: { T: 1 } },
        ],
      },
      {
        text: 'How do you prefer to recharge?',
        answers: [
          { text: 'By spending time with others', score: { E: 1 } },
          { text: 'By spending time alone', score: { I: 1 } },
        ],
      },
      {
        text: 'When planning, do you prefer to:',
        answers: [
          { text: 'Have a detailed schedule', score: { J: 1 } },
          { text: 'Be spontaneous and flexible', score: { P: 1 } },
        ],
      },
      {
        text: 'How do you prefer to process information?',
        answers: [
          { text: 'Focus on concrete facts and details', score: { S: 1 } },
          { text: 'Look for patterns and possibilities', score: { N: 1 } },
        ],
      },
      {
        text: 'In social situations, do you tend to:',
        answers: [
          { text: 'Initiate conversations and introduce people', score: { E: 1 } },
          { text: 'Wait to be approached by others', score: { I: 1 } },
        ],
      },
      {
        text: 'When solving problems, do you prefer to:',
        answers: [
          { text: 'Use tried-and-true methods', score: { S: 1 } },
          { text: 'Come up with new, innovative solutions', score: { N: 1 } },
        ],
      },
      {
        text: 'How do you usually make important decisions?',
        answers: [
          { text: 'Consider how it affects people involved', score: { F: 1 } },
          { text: 'Analyze pros and cons objectively', score: { T: 1 } },
        ],
      },
      {
        text: 'In your daily life, do you prefer:',
        answers: [
          { text: 'Having a structured routine', score: { J: 1 } },
          { text: 'Going with the flow', score: { P: 1 } },
        ],
      },
      {
        text: 'When working on a project, do you focus more on:',
        answers: [
          { text: 'The big picture and overall concept', score: { N: 1 } },
          { text: 'The specific details and facts', score: { S: 1 } },
        ],
      },
      {
        text: 'In a group setting, are you more likely to:',
        answers: [
          { text: 'Speak up and share your thoughts', score: { E: 1 } },
          { text: 'Listen and observe before speaking', score: { I: 1 } },
        ],
      },
      {
        text: 'When faced with a conflict, do you tend to:',
        answers: [
          { text: 'Consider everyone\'s feelings', score: { F: 1 } },
          { text: 'Focus on finding a logical solution', score: { T: 1 } },
        ],
      },
      {
        text: 'How do you prefer your work environment?',
        answers: [
          { text: 'Organized and structured', score: { J: 1 } },
          { text: 'Flexible and adaptable', score: { P: 1 } },
        ],
      },
      {
        text: 'When learning new information, do you prefer:',
        answers: [
          { text: 'Concrete, practical applications', score: { S: 1 } },
          { text: 'Abstract theories and concepts', score: { N: 1 } },
        ],
      },
      {
        text: 'In your free time, do you prefer:',
        answers: [
          { text: 'Socializing with many people', score: { E: 1 } },
          { text: 'Spending time with a few close friends or alone', score: { I: 1 } },
        ],
      },
      {
        text: 'When making a tough decision, do you rely more on:',
        answers: [
          { text: 'Your personal values and feelings', score: { F: 1 } },
          { text: 'Objective facts and data', score: { T: 1 } },
        ],
      },
      {
        text: 'How do you approach deadlines?',
        answers: [
          { text: 'Work steadily to finish ahead of time', score: { J: 1 } },
          { text: 'Work in bursts, often finishing just in time', score: { P: 1 } },
        ],
      },
      {
        text: 'When solving a problem, do you prefer to:',
        answers: [
          { text: 'Focus on the present reality', score: { S: 1 } },
          { text: 'Imagine future possibilities', score: { N: 1 } },
        ],
      },
      {
        text: 'In conversations, do you tend to:',
        answers: [
          { text: 'Speak more than listen', score: { E: 1 } },
          { text: 'Listen more than speak', score: { I: 1 } },
        ],
      },
      {
        text: 'When giving feedback, are you more likely to:',
        answers: [
          { text: 'Be tactful and considerate', score: { F: 1 } },
          { text: 'Be honest and straightforward', score: { T: 1 } },
        ],
      },
      {
        text: 'How do you prefer your living space?',
        answers: [
          { text: 'Neat and organized', score: { J: 1 } },
          { text: 'Comfortable with some clutter', score: { P: 1 } },
        ],
      },
    ],
    results: {
      ISTJ: 'Quiet, serious, earn success by thoroughness and dependability. Practical, matter-of-fact, realistic, and responsible.',
      ISFJ: 'Quiet, friendly, responsible, and conscientious. Committed and steady in meeting their obligations.',
      INFJ: 'Seek meaning and connection in ideas, relationships, and material possessions. Want to understand what motivates people.',
      INTJ: 'Have original minds and great drive for implementing their ideas and achieving their goals.',
      ISTP: 'Tolerant and flexible, quiet observers until a problem appears, then act quickly to find workable solutions.',
      ISFP: 'Quiet, friendly, sensitive, and kind. Enjoy the present moment, what\'s going on around them.',
      INFP: 'Idealistic, loyal to their values and to people who are important to them. Curious, quick to see possibilities.',
      INTP: 'Seek to develop logical explanations for everything that interests them. Theoretical and abstract.',
      ESTP: 'Flexible and tolerant, they take a pragmatic approach focused on immediate results.',
      ESFP: 'Outgoing, friendly, and accepting. Exuberant lovers of life, people, and material comforts.',
      ENFP: 'Warmly enthusiastic and imaginative. See life as full of possibilities.',
      ENTP: 'Quick, ingenious, stimulating, alert, and outspoken. Resourceful in solving new and challenging problems.',
      ESTJ: 'Practical, realistic, matter-of-fact. Decisive, quickly move to implement decisions.',
      ESFJ: 'Warmhearted, conscientious, and cooperative. Want harmony in their environment.',
      ENFJ: 'Warm, empathetic, responsive, and responsible. Highly attuned to the emotions and needs of others.',
      ENTJ: 'Frank, decisive, assume leadership readily. Quickly see illogical and inefficient procedures and policies.',
    },
  },
  {
    id: 'love-language',
    name: 'Love Language',
    questions: [
      {
        text: 'I feel most appreciated when:',
        answers: [
          { text: 'My partner gives me a thoughtful gift', score: { gifts: 1 } },
          { text: 'My partner tells me "I love you"', score: { words: 1 } },
          { text: 'My partner helps me with tasks', score: { acts: 1 } },
          { text: 'My partner gives me their undivided attention', score: { time: 1 } },
          { text: 'My partner gives me a hug', score: { touch: 1 } },
        ],
      },
      {
        text: 'My ideal date would be:',
        answers: [
          { text: 'Receiving a surprise gift', score: { gifts: 1 } },
          { text: 'Having a deep conversation', score: { words: 1 } },
          { text: 'Doing something helpful together', score: { acts: 1 } },
          { text: 'Spending the whole day together', score: { time: 1 } },
          { text: 'Sharing physical affection like cuddling', score: { touch: 1 } },
        ],
      },
      {
        text: 'I feel most connected to my partner when they:',
        answers: [
          { text: 'Surprise me with something special', score: { gifts: 1 } },
          { text: 'Say something encouraging or loving', score: { words: 1 } },
          { text: 'Help me with something important', score: { acts: 1 } },
          { text: 'Spend uninterrupted time with me', score: { time: 1 } },
          { text: 'Hold my hand or show physical affection', score: { touch: 1 } },
        ],
      },
      {
        text: 'When I’m upset, I appreciate it when my partner:',
        answers: [
          { text: 'Brings me something to cheer me up', score: { gifts: 1 } },
          { text: 'Says kind and comforting words', score: { words: 1 } },
          { text: 'Helps me resolve the issue', score: { acts: 1 } },
          { text: 'Sits with me and listens', score: { time: 1 } },
          { text: 'Hugs me or offers physical comfort', score: { touch: 1 } },
        ],
      },
      {
        text: 'I feel loved when my partner:',
        answers: [
          { text: 'Gives me small, meaningful gifts', score: { gifts: 1 } },
          { text: 'Compliments me or says "I love you"', score: { words: 1 } },
          { text: 'Helps with household chores', score: { acts: 1 } },
          { text: 'Spends quality time with me without distractions', score: { time: 1 } },
          { text: 'Shows physical affection like holding hands', score: { touch: 1 } },
        ],
      },
    ],
    results: {
      gifts: 'Your primary love language is Receiving Gifts. You feel most appreciated when your partner gives thoughtful gifts, big or small, as tokens of their love.',
      words: 'Your primary love language is Words of Affirmation. Verbal expressions of love, such as compliments or "I love you", are what make you feel most loved.',
      acts: 'Your primary love language is Acts of Service. You feel most loved when your partner helps you with tasks or goes out of their way to make your life easier.',
      time: 'Your primary love language is Quality Time. You value undivided attention and quality time with your partner as a way to feel connected.',
      touch: 'Your primary love language is Physical Touch. Physical closeness, whether through hugs, hand-holding, or cuddling, makes you feel most loved and secure.',
    },
  },
  
  {
    id: 'disc',
    name: 'DISC Assessment',
   questions: [
      {
        text: 'In a group setting, I tend to:',
        answers: [
          { text: 'Take charge and lead the discussion', score: { D: 1 } },
          { text: 'Engage others and keep the mood positive', score: { I: 1 } },
          { text: 'Listen carefully and support others', score: { S: 1 } },
          { text: 'Analyze the situation and provide insights', score: { C: 1 } },
        ],
      },
      {
        text: 'When faced with a difficult decision, I:',
        answers: [
          { text: 'Make quick, decisive choices', score: { D: 1 } },
          { text: 'Consider how it will affect relationships', score: { I: 1 } },
          { text: 'Take my time to think through all options', score: { S: 1 } },
          { text: 'Analyze the facts and data carefully', score: { C: 1 } },
        ],
      },
      {
        text: 'When working on a project, I prefer to:',
        answers: [
          { text: 'Take control and get things done', score: { D: 1 } },
          { text: 'Collaborate and make it fun for everyone', score: { I: 1 } },
          { text: 'Work steadily and reliably with others', score: { S: 1 } },
          { text: 'Work independently and focus on accuracy', score: { C: 1 } },
        ],
      },
      {
        text: 'I handle stress by:',
        answers: [
          { text: 'Tackling the problem head-on', score: { D: 1 } },
          { text: 'Talking to others to stay positive', score: { I: 1 } },
          { text: 'Staying calm and working through it', score: { S: 1 } },
          { text: 'Analyzing the situation carefully', score: { C: 1 } },
        ],
      },
      {
        text: 'When it comes to deadlines, I:',
        answers: [
          { text: 'Take charge and ensure we meet them', score: { D: 1 } },
          { text: 'Motivate others to stay on track', score: { I: 1 } },
          { text: 'Work methodically to ensure steady progress', score: { S: 1 } },
          { text: 'Organize everything meticulously to meet deadlines', score: { C: 1 } },
        ],
      },
    ],
    results: {
      D: 'Your primary DISC style is Dominance (D). You are results-driven, assertive, and enjoy taking control of situations. You thrive on challenges and prefer direct communication.',
      I: 'Your primary DISC style is Influence (I). You are outgoing, enthusiastic, and enjoy interacting with others. You are good at inspiring and motivating those around you.',
      S: 'Your primary DISC style is Steadiness (S). You are calm, patient, and reliable. You value cooperation and consistency in your interactions with others.',
      C: 'Your primary DISC style is Conscientiousness (C). You are detail-oriented, analytical, and prefer working with structure and precision. You are known for your accuracy and quality of work.',
    },
  },
  
];

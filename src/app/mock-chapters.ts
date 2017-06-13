import { Chapter } from './chapter.model';


export const CHAPTERS: Chapter[] = [
  new Chapter('title1','introbody',
      'http://images2.onionstatic.com/clickhole/1796/4/original/800.jpg',
      1, [2,"start"], [null,null]),
  new Chapter('title2',
      'Ruined Earth. The near future. Humankind, in its folly, allowed the ozone hole to grow too large. We feasted on ozone like Icarus and scorched the planet into an inhospitable wasteland.',
      'http://images2.onionstatic.com/clickhole/1796/5/original/800.jpg',
      2, [3,"Gaia, what have we wrought?"], [null,null]),
  new Chapter('title3',
      'The few survivors who remain are crowded into fetid, smog-choked cities. These wretched slums are petri dishes of suffering, where the bacteria are people and the agar is despair.',
      'http://images2.onionstatic.com/clickhole/1796/6/original/800.jpg',
      3, [31,"Hope is now a dead whimper, never spoken, never heard, only echoing in the catacombs of mankind’s aspirations."], [32,"need link"]),
  new Chapter('title4',
      'To escape the hellscape of reality, humanity now spends most of its time plugged into a virtual world called the Dataverse. Those who cruise its digital streets can find any experience the mind desires. However, you are not just a random user. You are the greatest hacker in the Dataverse, a legendary cybercriminal who surfs the code. What is your hacker alias?','http://images2.onionstatic.com/clickhole/1796/7/original/800.jpg', 4, [41,"to 41"], [42,"to 42"]),
  new Chapter('title 41','41 intro','', 41, [51,"option1"], [52,"option2"]),
  new Chapter('title 42','42 intro','', 42, [51,"option1"], [52,"option2"])

];

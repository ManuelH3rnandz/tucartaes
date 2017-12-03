import Controller from '@ember/controller';
import Ember from 'ember';


function distributeCards(groupCards) {

  let finalGroup = groupCards,
      groupLength = groupCards[0].cards.length * 3,
      group = 0,
      index = 0,
      currentGroup = 2,
      currentCard = 6,
      aux = [
         {
           cards: []
         },
         {
           cards: []
         },
         {
           cards: []
         }
      ];

  for (; index < groupLength; index++) {

    aux[group++].cards.push(groupCards[currentGroup].cards[currentCard--]);

    if (group > 2) {
      group = 0;
    }

    if (currentCard < 0) {
      currentGroup--;
      currentCard = 6;
    }
  }

  finalGroup.forEach((element, index = 0) => {
    Ember.set(element,'cards',aux[index++].cards)
  });

  return finalGroup;

}

export default Controller.extend({
  round: 0,
  groups: [
    {
      id: "1",
      cards: [14, 5, 3, 4, 2, 10, 7]
    },
    {
      id: "2",
      cards: [13, 9, 6, 11, 12, 21, 1]
    },
    {
      id: "3",
      cards: [15, 16, 17, 18, 19, 20, 8]
    }
  ],
  actions: {
    rounds(group, t) {
      let allGroups = this.get('groups'),
        aux = allGroups[group.id - 1].cards;

      this.set('round', this.get('round') + 1);

      if (group.id != 2) {
        Ember.set(allGroups[group.id - 1],"cards",allGroups[1].cards);
        Ember.set(allGroups[1],"cards",aux);
      }

      allGroups = distributeCards(allGroups);

      if (this.get('round') < 3) {
        this.set('groups', allGroups);
      } else {
        this.set('round', 0);
        t.transitionTo(`/play/${allGroups[1].cards[3]}`);
      }
    }
  }
});

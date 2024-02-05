// Problem: 1768. Merge Strings Alternately (https://leetcode.com/problems/merge-strings-alternately)

function mergeAlternately(word1: string, word2: string): string {
    let total = word1.length + word2.length;
    let index1 = 0;
    let index2 = 0;
    const concates:string[] = [];
    while(total--) {
        const alphabet1 = word1[index1++];
        const alphabet2 = word2[index2++];

        if(alphabet1 !== undefined) {
            concates.push(alphabet1);
        }

        if(alphabet2 !== undefined) {
            concates.push(alphabet2);
        }
    }

    return concates.join('');
};

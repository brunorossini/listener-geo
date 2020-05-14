module.exports = (tracker_id) => `
with rules as (select unnest(uit.id_trackers) as tracker_id, user_id 
from "userItemTrackers" uit)
select user_id
from rules
where tracker_id = ${tracker_id}
`;

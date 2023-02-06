# Write your MySQL query statement below
SELECT visits.customer_id, COUNT(*) AS count_no_trans
FROM Transactions
RIGHT JOIN visits USING (visit_id)
WHERE Transactions.visit_id IS NULL
GROUP BY visits.customer_id
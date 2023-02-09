# Write your MySQL query statement below
SELECT customer_number FROM (
SELECT COUNT(customer_number) AS s, customer_number FROM Orders
GROUP BY customer_number
ORDER BY s DESC
) AS mo LIMIT 1;
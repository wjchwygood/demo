package report;

import java.util.Date;
import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface RecordDao extends JpaRepository<Record, Long> {
	
	public Record findById(Integer id);
	
	@Query("from Record r where "
			+ "(:id is null or r.id = :id) "
			+ "and (:invoiceNo is null or r.invoiceNo = :invoiceNo) "
			+ "and (:quantity is null or r.quantity = :quantity) "
			+ "and (:stockCode is null or r.stockCode = :stockCode) "
			+ "and (:description is null or r.description like concat('%',:description,'%')) "
			+ "and (:fromDate is null or r.invoiceDate >= :fromDate) "
			+ "and (:toDate is null or r.invoiceDate <= :toDate) "
			+ "and (:minPrice is null or r.unitPrice >= :minPrice) "
			+ "and (:maxPrice is null or r.unitPrice <= :maxPrice) "
			+ "and (:customerID is null or r.customerID = :customerID) "
			+ "and (:country is null or r.country = :country)")
	public List<Record> findByAll(
			@Param("id") Integer id, 
			@Param("invoiceNo") String invoiceNo,
			@Param("quantity") Integer quantity, 
			@Param("stockCode") String stockCode,
			@Param("description") String description,
			@Param("fromDate") Date fromDate,
			@Param("toDate") Date toDate,
			@Param("minPrice") Float minPrice,
			@Param("maxPrice") Float maxPrice,
			@Param("customerID") Integer customerID,
			@Param("country") String country,
			Pageable pageable);
	
	@Query("select count(r) from Record r where "
			+ "(:id is null or r.id = :id) "
			+ "and (:invoiceNo is null or r.invoiceNo = :invoiceNo) "
			+ "and (:quantity is null or r.quantity = :quantity) "
			+ "and (:stockCode is null or r.stockCode = :stockCode) "
			+ "and (:description is null or r.description like concat('%',:description,'%')) "
			+ "and (:fromDate is null or r.invoiceDate >= :fromDate) "
			+ "and (:toDate is null or r.invoiceDate <= :toDate) "
			+ "and (:minPrice is null or r.unitPrice >= :minPrice) "
			+ "and (:maxPrice is null or r.unitPrice <= :maxPrice) "
			+ "and (:customerID is null or r.customerID = :customerID) "
			+ "and (:country is null or r.country = :country)")
	public Long getAmountByAll(
			@Param("id") Integer id, 
			@Param("invoiceNo") String invoiceNo,
			@Param("quantity") Integer quantity, 
			@Param("stockCode") String stockCode,
			@Param("description") String description,
			@Param("fromDate") Date fromDate,
			@Param("toDate") Date toDate,
			@Param("minPrice") Float minPrice,
			@Param("maxPrice") Float maxPrice,
			@Param("customerID") Integer customerID,
			@Param("country") String country);
	
}



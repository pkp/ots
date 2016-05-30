<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xs="http://www.w3.org/2001/XMLSchema"
    xmlns:mml="http://www.w3.org/1998/Math/MathML"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xmlns:tei="http://www.tei-c.org/ns/1.0"
    exclude-result-prefixes="xlink xs mml tei"
    version="1.0">

	<xsl:template match="/">
		<article article-type="research-article">
			<xsl:apply-templates select="tei:TEI/tei:teiHeader"/>
			<xsl:apply-templates select="tei:TEI/tei:text"/>
		</article>
	</xsl:template>

	<xsl:template match="tei:teiHeader">
    <front>
    	<journal-meta>
    		<journal-title>
    			<xsl:value-of select="tei:fileDesc/tei:sourceDesc/tei:biblStruct/tei:monogr/tei:title"/>
    		</journal-title>
    	</journal-meta>
    	<article-meta>
    		<title-group>
    			<article-title>
					<xsl:apply-templates select="tei:fileDesc/tei:titleStmt/tei:title"/>
				</article-title>
			</title-group>
			<contrib-group>
				<xsl:for-each select="tei:fileDesc/tei:sourceDesc/tei:biblStruct/tei:analytic/tei:author">
					<contrib>
						<name>
							<surname>
								<xsl:value-of select="tei:persName/tei:surname"/>
							</surname>
							<given-names>
								<xsl:for-each select="tei:persName/tei:forename">
									<xsl:value-of select="string(.)"/> 
								</xsl:for-each>
							</given-names>
						</name>
						<aff>
							<xsl:value-of select="tei:affiliation/tei:orgName[@type='institution']"/>
							<named-content content-type="dept">
								<xsl:value-of select="tei:affiliation/tei:orgName[@type='department']"/>
							</named-content>
						</aff>
					</contrib>
				</xsl:for-each>
			</contrib-group>
			<abstract>
				<xsl:apply-templates select="tei:profileDesc/tei:abstract"/>
			</abstract>
		</article-meta>
	</front>
	</xsl:template>

	<xsl:template match="tei:text">
	<back>
		<ref-list>
			<xsl:for-each select="tei:back/tei:div/tei:listBibl/tei:biblStruct">
				<ref>
					<!-- <xsl:value-of select="normalize-space()"/> -->
					<xsl:for-each select="tei:analytic/tei:author/tei:persName"><xsl:value-of select="normalize-space()"/>, </xsl:for-each>(<xsl:value-of select="tei:monogr/tei:imprint/tei:date/@when"/>) <xsl:value-of select="tei:analytic/tei:title"/>. <xsl:value-of select="tei:monogr/tei:title"/>
				</ref>
			</xsl:for-each>
		</ref-list>
	</back>
	</xsl:template>


  <xsl:template match="tei:title">
    <xsl:apply-templates select="node()|@*"/>
  </xsl:template>

  <xsl:template match="tei:p">
    <p>
      <xsl:apply-templates select="node()|@*"/>
    </p>
  </xsl:template>


</xsl:stylesheet>
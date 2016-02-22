<?xml version="1.0" encoding="UTF-8"?>
<!--
XSL for converting BIB2MODS output XML to NLM <ref><citation> style.
-->
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:xs="http://www.w3.org/2001/XMLSchema" exclude-result-prefixes="xs">

<xsl:output method="xml" encoding="utf-8" omit-xml-declaration="yes"/>

<xsl:template match="/">
<ref-list>
        <xsl:for-each select="/modsCollection/mods">
        <ref id="{@ID}">
            <element-citation>
                <person-group person-group-type="author">
                    <xsl:for-each select="name">
                        <name>
                            <xsl:for-each select="namePart">
                                <xsl:variable name="nameType" select="@type"/>
                                <xsl:if test="$nameType = 'family'">
                                    <surname>
                                        <xsl:value-of select="string(.)"/>
                                    </surname>
                                </xsl:if>
                            </xsl:for-each>
                            <given-names>
                                <xsl:for-each select="namePart">
                                    <xsl:variable name="nameType" select="@type"/>
                                    <xsl:if test="$nameType = 'given'">
                                        <xsl:value-of select="string(.)"/>
                                    </xsl:if>
                                </xsl:for-each>
                            </given-names>
                        </name>
                    </xsl:for-each>
                </person-group>
                <xsl:for-each select="titleInfo/title">
                    <article-title>
                        <xsl:value-of select="string(.)"/>
                    </article-title>
                </xsl:for-each>
                <xsl:for-each select="relatedItem">
                    <xsl:for-each select="titleInfo/title">
                        <source>
                            <xsl:value-of select="string(.)"/>
                        </source>
                    </xsl:for-each>
                    <xsl:for-each select="originInfo/publisher">
                        <publisher-name>
                            <xsl:value-of select="string(.)"/>
                        </publisher-name>
                    </xsl:for-each>
                </xsl:for-each>
                <xsl:for-each select="originInfo/dateIssued">
                    <year>
                        <xsl:value-of select="string(.)"/>
                    </year>
                </xsl:for-each>
                <xsl:for-each select="part/extent">
                    <xsl:for-each select="start">
                        <fpage>
                            <xsl:value-of select="string(.)"/>
                        </fpage>
                    </xsl:for-each>
                    <xsl:for-each select="end">
                        <lpage>
                            <xsl:value-of select="string(.)"/>
                        </lpage>
                    </xsl:for-each>
                </xsl:for-each>
            </citation>
        </ref>
    </xsl:for-each>
</ref-list>
</xsl:template>
</xsl:stylesheet>


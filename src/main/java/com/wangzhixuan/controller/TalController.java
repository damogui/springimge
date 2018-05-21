package com.wangzhixuan.controller;

import javax.validation.Valid;

import java.util.List;
import java.util.Date;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.plugins.Page;
import com.wangzhixuan.commons.result.PageInfo;
import com.wangzhixuan.model.Tal;
import com.wangzhixuan.service.ITalService;
import com.wangzhixuan.commons.base.BaseController;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author jack.guo
 * @since 2018-05-21
 */
@Controller
@RequestMapping("/tal")
public class TalController extends BaseController {

    @Autowired private ITalService talService;
    
    @GetMapping("/manager")
    public String manager() {
        return "admin/tal/talList";
    }
    
    @PostMapping("/dataGrid")
    @ResponseBody
    public PageInfo dataGrid(Tal tal, Integer page, Integer rows, String sort,String order) throws CloneNotSupportedException {
        PageInfo pageInfo = new PageInfo(page, rows, sort, order);

        Page<Tal> pages = getPage(pageInfo);
        pages = talService.selectPage(pages,tal);
        pageInfo.setRows(pages.getRecords());
        pageInfo.setTotal(pages.getTotal());
        return pageInfo;
    }
    
    /**
     * 添加页面
     * @return
     */
    @GetMapping("/addPage")
    public String addPage() {
        return "admin/tal/talAdd";
    }
    
    /**
     * 添加
     * @param 
     * @return
     */
    @PostMapping("/add")
    @ResponseBody
    public Object add(@Valid Tal tal) {
        tal.setCreateTime(new Date());
        tal.setUpdateTime(new Date());
        tal.setDeleteFlag(0);
        boolean b = talService.insert(tal);
        if (b) {
            return renderSuccess("添加成功！");
        } else {
            return renderError("添加失败！");
        }
    }
    
    /**
     * 删除
     * @param id
     * @return
     */
    @PostMapping("/delete")
    @ResponseBody
    public Object delete(Long id) {
        Tal tal = new Tal();
        tal.setId(id.intValue());
        tal.setUpdateTime(new Date());
        tal.setDeleteFlag(1);
        boolean b = talService.updateById(tal);
        if (b) {
            return renderSuccess("删除成功！");
        } else {
            return renderError("删除失败！");
        }
    }
    
    /**
     * 编辑
     * @param model
     * @param id
     * @return
     */
    @GetMapping("/editPage")
    public String editPage(Model model, Long id) {
        Tal tal = talService.selectById(id);
        model.addAttribute("tal", tal);
        return "admin/tal/talEdit";
    }
    
    /**
     * 编辑
     * @param 
     * @return
     */
    @PostMapping("/edit")
    @ResponseBody
    public Object edit(@Valid Tal tal) {
        tal.setUpdateTime(new Date());
        boolean b = talService.updateById(tal);
        if (b) {
            return renderSuccess("编辑成功！");
        } else {
            return renderError("编辑失败！");
        }
    }
}

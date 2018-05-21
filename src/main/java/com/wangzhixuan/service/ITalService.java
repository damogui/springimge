package com.wangzhixuan.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.Page;
import com.wangzhixuan.model.Tal;
import com.baomidou.mybatisplus.service.IService;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author jack.guo
 * @since 2018-05-21
 */
public interface ITalService extends IService<Tal> {
    Page<Tal> selectPage(Page<Tal> var1, Tal tal);

}
